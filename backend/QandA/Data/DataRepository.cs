namespace QandA.Data
{
    public class DataRepository : IDataRepository
    {
        public AnswerGetResponse GetAnswer(int answerId)
        {
            throw new System.NotImplementedException();
        }

        public QuestionGetSingleResponse GetQuestion(int questionId)
        {
            throw new System.NotImplementedException();
        }

        public System.Collections.Generic.IEnumerable<QuestionGetManyResponse> GetQuestions()
        {
            throw new System.NotImplementedException();
        }

        public System.Collections.Generic.IEnumerable<QuestionsGetManyResponse> GetQuestionsBySearch(string search)
        {
            throw new System.NotImplementedException();
        }

        public System.Collections.Generic.IEnumerable<QuestionsGetManyResponse> GetUnansweredQuestions()
        {
            throw new System.NotImplementedException();
        }

        public bool QuestionExists(int questionId)
        {
            throw new System.NotImplementedException();
        }
    }
}
