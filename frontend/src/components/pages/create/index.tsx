import { Title } from "@/components/atoms";
import {
  CreateButton,
  FlexContainer,
  ScrollableContainer,
} from "@/components/molecules";
import { useParams } from "react-router-dom";
import { Section } from "./components";
import { createRegister } from "./constance";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { createContext } from "@/api";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(10),
  surname: z
    .string()
    .min(2, {
      message: "Surname must be at least 2 characters.",
    })
    .max(10),
  email: z
    .string()
    .email()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .max(30),
  age: z.string().min(2).max(2),
  github: z
    .string()
    .min(20, {
      message: "Url must be at least 20 characters.",
    })
    .url(),
  linkedin: z
    .string()
    .min(20, {
      message: "Url must be at least 20 characters.",
    })
    .url(),
});

export type ContextSchema = typeof formSchema;

export type FormType = UseFormReturn<
  z.infer<ContextSchema>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  undefined
>;

export const Create = () => {
  const mutate = useMutation({
    mutationFn: createContext,
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const { type } = useParams<{ type: "context" | "resume" }>();
  const form = useForm<z.infer<ContextSchema>>({
    resolver: zodResolver(formSchema),
  });

  if (!type) return "Type not found";

  function onSubmit(values: z.infer<ContextSchema>) {
    mutate.mutate(values);
  }

  return (
    <FlexContainer column className="gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FlexContainer>
            <Title>Create {type}</Title>
            <CreateButton type="submit" />
          </FlexContainer>
          <ScrollableContainer>
            {createRegister[type].map((section) => (
              <Section key={section.id} section={section} form={form} />
            ))}
          </ScrollableContainer>
        </form>
      </Form>
    </FlexContainer>
  );
};
