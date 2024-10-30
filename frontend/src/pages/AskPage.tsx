import { Page } from '../components/Page';
import {
  Fieldset,
  FieldContainer,
  FieldLabel,
  FieldInput,
  FieldTextArea,
  FormButtonContainer,
  PrimaryButton,
} from '../Styles';
import { useForm } from 'react-hook-form';

export const AskPage = () => {
  const { register } = useForm<FormData>();
  return (
    <Page title="Ask a question">
      <form>
        <Fieldset>
          <FieldContainer>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <FieldInput
              {...register('title')}
              id="title"
              name="title"
              type="text"
            />
          </FieldContainer>
          <FieldContainer>
            <FieldLabel htmlFor="content">Content</FieldLabel>
            <FieldTextArea
              {...register('content')}
              id="content"
              name="content"
            />
          </FieldContainer>
        </Fieldset>
        <FormButtonContainer>
          <PrimaryButton type="submit">Submit Your Question</PrimaryButton>
        </FormButtonContainer>
      </form>
    </Page>
  );
};
export default AskPage;
type FormData = {
  title: string;
  content: string;
};