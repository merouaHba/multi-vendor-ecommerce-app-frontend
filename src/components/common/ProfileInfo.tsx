import React from "react";
import { Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import { TLoading, TUser } from "@/types";

// type ProfileFormData = Omit<TUser,"name"| "id" | "role" | "profilePicture">;

interface ProfileFormData {
  firstname: string;

  lastname: string;

  email: string;

  mobile?: string | null;

  address?: string;
}


interface ProfileInfoProps {
  user: TUser | null;
  loading: TLoading;
  profileErrors: FieldErrors<ProfileFormData>;
  registerProfile: UseFormRegister<ProfileFormData>;
  handleProfileSubmit: UseFormHandleSubmit<ProfileFormData>;
  submitProfileForm: (data: ProfileFormData) => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  user,
  loading,
  profileErrors,
  registerProfile,
  handleProfileSubmit,
  submitProfileForm,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);

  // Display fields show combined name instead of separate fields
  const displayFields = [
    { label: "Name", value: user?.name, field: "name" },
    { label: "Email", value: user?.email, field: "email" },
    { label: "Phone", value: user?.mobile, field: "mobile" },
    { label: "Address", value: user?.address, field: "address" },
  ] as const;

  // Edit fields include firstname and lastname but not name
  const editFields = [
    {
      label: "First Name",
      field: "firstname" as const,
      type: "text",
      required: true,
    },
    {
      label: "Last Name",
      field: "lastname" as const,
      type: "text",
      required: true,
    },
    { label: "Email", field: "email" as const, type: "email", required: true },
    { label: "Phone", field: "mobile" as const, type: "tel", required: false },
    {
      label: "Address",
      field: "address" as const,
      type: "text",
      required: false,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent>
        {!isEditing ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayFields.map(
                ({ label, value, field }) =>
                  value && (
                    <div key={field}>
                      <label className="text-sm text-muted-foreground">
                        {label}
                      </label>
                      <p className="font-medium">{value}</p>
                    </div>
                  )
              )}
            </div>
            <Button onClick={() => setIsEditing(true)}>Edit Information</Button>
          </div>
        ) : (
          <form
            onSubmit={handleProfileSubmit(submitProfileForm)}
            className="space-y-4"
          >
            <div className="grid gap-4">
              {editFields.map(({ label, field, type, required }) => (
                <div key={field}>
                  <label className="text-sm text-muted-foreground">
                    {label}
                    {required && (
                      <span className="text-destructive ml-1">*</span>
                    )}
                  </label>
                  <Input
                    type={type}
                    {...registerProfile(field, {
                      required: required ? `${label} is required` : false,
                    })}
                    defaultValue={user?.[field] || ""}
                  />
                  {profileErrors[field] && (
                    <p className="text-sm text-destructive mt-1">
                      {profileErrors[field]?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={loading === "pending"}>
                {loading === "pending" && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileInfo;
