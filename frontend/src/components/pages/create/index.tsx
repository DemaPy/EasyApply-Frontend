import {
  CreateButton,
  FlexContainer,
  ScrollableContainer,
} from "@/components/molecules";
import { useNavigate, useParams } from "react-router-dom";
import { Section } from "./components";
import { createRegister } from "./constance";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { createContext } from "@/api";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  context: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30)
    .optional(),
  resume: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30)
    .optional(),
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
  const navigate = useNavigate();
  const mutate = useMutation({
    mutationFn: createContext,
    onSuccess: (data) => {
      navigate("/");
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const { type } = useParams<{ type: "context" | "resume" }>();
  const form = useForm<z.infer<ContextSchema>>({
    resolver: zodResolver(formSchema),
  });

  if (!type) return "Type not found";

  function onSubmit(values: z.infer<ContextSchema>) {
    const title = values.context!;
    delete values.context;
    mutate.mutate({ title, sections: values });
  }

  return (
    <FlexContainer column className="gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FlexContainer className="gap-4" column>
            <FlexContainer>
              <FormField
                control={form.control}
                name={type}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full text-xl!"
                        placeholder={`Create ${type}`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CreateButton disabled={mutate.isPending} type="submit" />
            </FlexContainer>
            <ScrollableContainer>
              {createRegister[type].map((section) => (
                <Section key={section.id} section={section} form={form} />
              ))}
            </ScrollableContainer>
          </FlexContainer>
        </form>
      </Form>
    </FlexContainer>
  );
};
