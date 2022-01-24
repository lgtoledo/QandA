using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using QandA.Data;

namespace QandA.Authorization
{
    public class MustBeQuestionAuthorHandler : AuthorizationHandler<MustBeQuestionAuthorRequirement>
    {
        private readonly IDataRepository _dataRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public MustBeQuestionAuthorHandler(IDataRepository dataRepository, IHttpContextAccessor httpContextAccessor)
        {
            _dataRepository = dataRepository;
            _httpContextAccessor = httpContextAccessor;
        }

        protected async override Task HandleRequirementAsync(AuthorizationHandlerContext context, MustBeQuestionAuthorRequirement requirement)
        {
            // check that the user is authenticated
            if (!context.User.Identity.IsAuthenticated)
            {
                context.Fail();
                return;
            }

            // get the question id from the request
            var questionId = _httpContextAccessor.HttpContext.Request.RouteValues["questionId"];
            int questionIdAsInt = Convert.ToInt32(questionId);

            // get the user id from the name identifier claim
            var userId = context.User.FindFirst(ClaimTypes.NameIdentifier).Value;

            // get the question from the data repository
            var question = _dataRepository.GetQuestion(questionIdAsInt);

            //if the question can't be found go to the next piece of middleware
            if (question == null)
            {
                // dejamos que siga adelante así el controller se encarga de retornar un error 404 (not found) en lugar de un 401 (unauthorized)
                context.Succeed(requirement);
                return;
            }

            // return failure if the user id in the question from the data repository is different to the user id in the request
            if (question.UserId != userId)
            {
                context.Fail();
                return ;
            }

            // return success if we manage to get here
            context.Succeed(requirement);
        }
    }
}