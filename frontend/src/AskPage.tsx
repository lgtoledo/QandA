import React from 'react';
import { Page } from './Page';
import {
  Fieldset,
  FieldContainer,
  FieldLabel,
  FieldInput,
  FieldTextArea,
  FormButtonContainer,
  PrimaryButton,
  FieldError,
  SubmissionSuccess,
} from './Styles';
import { useForm, useFormState } from 'react-hook-form';
import { postQuestion } from './QuestionsData';

type FormData = {
  title: string;
  content: string;
};

export const AskPage = () => {
  const [successfullySubmitted, setSuccessfullySubmitted] =
    React.useState(false);

  const { register, formState, handleSubmit } = useForm<FormData>({
    mode: 'onBlur',
  });

  const submitForm = async (data: FormData) => {
    const result = await postQuestion({
      title: data.title,
      content: data.content,
      userName: 'Fred',
      created: new Date(),
    });
    setSuccessfullySubmitted(result ? true : false);
  };

  return (
    <Page title="Ask a question">
      <form onSubmit={handleSubmit(submitForm)}>
        <Fieldset disabled={formState.isSubmitted || successfullySubmitted}>
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput
              id="title"
              {...register('title', {
                required: true,
                minLength: 10,
              })}
              type="text"
            />
            {formState.errors.title &&
              formState.errors.title.type === 'required' && (
                <FieldError>You must enter the question title</FieldError>
              )}
            {formState.errors.title &&
              formState.errors.title.type === 'minLength' && (
                <FieldError>
                  The title must be at least 10 characters
                </FieldError>
              )}
          </FieldContainer>
          <FieldContainer>
            <FieldLabel htmlFor="content">Content</FieldLabel>
            <FieldTextArea
              id="content"
              {...register('content', {
                required: true,
                minLength: 50,
              })}
            />
            {formState.errors.content &&
              formState.errors.content.type === 'required' && (
                <FieldError>You must enter the question content</FieldError>
              )}
            {formState.errors.content &&
              formState.errors.content.type === 'minLength' && (
                <FieldError>
                  The content must be at least 50 characters
                </FieldError>
              )}
          </FieldContainer>
          <FormButtonContainer>
            <PrimaryButton type="submit">Submit Your Question</PrimaryButton>
          </FormButtonContainer>
          {successfullySubmitted && (
            <SubmissionSuccess>
              Your question was successfully submitted
            </SubmissionSuccess>
          )}
        </Fieldset>
      </form>
    </Page>
  );
};
export default AskPage;
