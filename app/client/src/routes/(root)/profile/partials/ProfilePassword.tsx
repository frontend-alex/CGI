import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useApiMutation } from "@/hooks/hook";
import { Input } from "@/components/ui/input";
import type { User } from "@shared/types/user";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AccountProviders } from "@shared/types/user";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  updatePasswordSchema,
  type updatePasswordSchemaType,
} from "@shared/schemas/auth/auth.schema";
import { LoaderCircle, Section } from "lucide-react";
import { lazy, Suspense } from "react";
import { API } from "@/config/config";
import { PartialContainer, SectionContent, SectionDescription, SectionHeading, SectionLabel } from "@/components/ui/partials";

const PasswordStrengthChecks = lazy(
  () => import("@/components/password-checker")
);

const ProfilePassword = ({ user }: { user: User }) => {
  if (user.provider != AccountProviders.Credentials) return null;

  const updatePasswordsForm = useForm({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const { watch } = updatePasswordsForm;

  const { mutateAsync: updatePassword, isPending } =
    useApiMutation<updatePasswordSchemaType>(
      "PUT",
      API.AUTH.PRIVATE.UPDATE_PASSWORD,
      {
        onSuccess: (data) => {
          updatePasswordsForm.reset();
          toast.success(data.message);
        },
        onError: (err) => toast.error(err.response?.data.message),
      }
    );

  const handleUpdatePassword = async (data: updatePasswordSchemaType) =>
    await updatePassword(data);

  return (
    <PartialContainer className="mt-5 max-w-3xl">
      <Section>
        {/* Left Column — Label */}
        <SectionLabel>
          <SectionHeading>Password</SectionHeading>
          <SectionDescription>
            Update your account password. Strong passwords keep your account secure.
          </SectionDescription>
        </SectionLabel>

        {/* Right Column — Content */}
        <SectionContent>
          <Form {...updatePasswordsForm}>
            <form
              onSubmit={updatePasswordsForm.handleSubmit(handleUpdatePassword)}
              className="space-y-4"
            >
              {/* Current password */}
              <FormField
                control={updatePasswordsForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Current Password"
                        className="input no-ring"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* New password */}
              <FormField
                control={updatePasswordsForm.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="New Password"
                        className="input no-ring"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password strength checker */}
              {watch("newPassword") ? (
                <Suspense fallback={null}>
                  <PasswordStrengthChecks password={watch("newPassword")} />
                </Suspense>
              ) : null}

              {/* Confirm new password */}
              <FormField
                control={updatePasswordsForm.control}
                name="confirmNewPassword"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm New Password"
                        className="input no-ring"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <div className="flex items-center gap-3">
                    <LoaderCircle className="animate-spin" />
                    <p>Saving...</p>
                  </div>
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </Form>
        </SectionContent>
      </Section>
    </PartialContainer>
  );
};

export default ProfilePassword;
