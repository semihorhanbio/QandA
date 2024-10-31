import { Page } from '../components/Page';
import { postQuestion } from '../QuestionsData';
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
} from '../Styles';
import { useForm } from 'react-hook-form';
import React from 'react';

export const AskPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    formState,
  } = useForm<FormData>({
    mode: 'onBlur',
  });
  const [successfullySubmitted, setSuccessfullySubmitted] =
    React.useState(false);
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
        <Fieldset disabled={formState.isSubmitting || successfullySubmitted}>
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput
              {...register('title', { required: true, minLength: 10 })}
              id="title"
              name="title"
              type="text"
            />
            {errors.title && errors.title.type === 'required' && (
              <FieldError>You must enter the question title</FieldError>
            )}
            {errors.title && errors.title.type === 'minLength' && (
              <FieldError>The title must be at least 10 characters</FieldError>
            )}
          </FieldContainer>
          <FieldContainer>
            <FieldLabel htmlFor="content">Content</FieldLabel>
            <FieldTextArea
              {...register('content', { required: true, minLength: 50 })}
              id="content"
              name="content"
            />
            {errors.content && errors.content.type === 'required' && (
              <FieldError>You must enter the question content</FieldError>
            )}
            {errors.content && errors.content.type === 'minLength' && (
              <FieldError>
                The content must be at least 50 characters
              </FieldError>
            )}
          </FieldContainer>
        </Fieldset>
        <FormButtonContainer>
          <PrimaryButton type="submit">Submit Your Question</PrimaryButton>
        </FormButtonContainer>
        {successfullySubmitted && (
          <SubmissionSuccess>
            Your question was successfully submitted
          </SubmissionSuccess>
        )}
      </form>
    </Page>
  );
};
export default AskPage;
type FormData = {
  title: string;
  content: string;
};