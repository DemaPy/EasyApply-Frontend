import {
  FlexContainer,
  CreateButton,
  ScrollableContainer,
} from "@/components/molecules";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Form, useNavigate, useParams } from "react-router-dom";
import { createRegister } from "../../constance";
import { UseFormReturn, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createContext } from "@/api";
import { ContextSchema, formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section } from "../../components";

export type FormType = UseFormReturn<
  z.infer<ContextSchema>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  undefined
>;

export const ContextCreate = () => {
  const { type } = useParams<{ type: "context" }>();
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

  const form = useForm<z.infer<ContextSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<ContextSchema>) {
    const title = values.context!;
    delete values.context;
    mutate.mutate({ title, sections: values });
  }

  if (!type) return "Type not found";

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
