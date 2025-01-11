import React from "react";
import { Camera, Lock, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useProfile from "@/hooks/useProfile";
import ProfileInfo from "@/components/common/ProfileInfo";

export default function ProfilePage() {
  const {
    loading,
    isUploading,
    user,
    profileErrors,
    passwordErrors,
    registerProfile,
    handleProfileSubmit,
    submitProfileForm,
    registerPassword,
    handlePasswordSubmit,
    submitPasswordForm,
    handleImageChange,
    handleDeleteImage,
  } = useProfile();

  const [isChangingPassword, setIsChangingPassword] = React.useState(false);

  if (loading === "pending" && !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="space-y-6">
        {/* Profile Picture Section */}
        <Card>
          <CardHeader>
            {/* <CardTitle>Profile Picture</CardTitle> */}
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage
                    src={user?.profilePicture}
                    alt={user?.name}
                  />
                  <AvatarFallback>
                    {user?.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 flex gap-2">
                  <label
                    htmlFor="avatar-upload"
                    className="p-2 bg-primary text-white rounded-full cursor-pointer hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isUploading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Camera className="h-5 w-5" />
                    )}
                  </label>
                  {user?.profilePicture && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button
                          className="p-2 bg-destructive text-white rounded-full cursor-pointer hover:bg-destructive/90 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isUploading}
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Remove Profile Picture?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This will remove your current profile picture. This
                            action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={handleDeleteImage}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Remove
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </div>
                <input
                  id="avatar-upload"
                  type="file"
                  className="hidden"
                  accept="image/jpeg,image/png,image/gif,image/webp"
                  onChange={handleImageChange}
                  disabled={isUploading}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Click the camera icon to update your profile picture
                {user?.profilePicture && " or the trash icon to remove it"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Profile Information Section */}
        <ProfileInfo
          user={user}
          loading={loading}
          profileErrors={profileErrors}
          registerProfile={registerProfile}
          handleProfileSubmit={handleProfileSubmit}
          submitProfileForm={submitProfileForm}
        />
        {/* Password Section */}
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
          </CardHeader>
          <CardContent>
            {!isChangingPassword ? (
              <Button onClick={() => setIsChangingPassword(true)}>
                <Lock className="h-4 w-4 mr-2" />
                Change Password
              </Button>
            ) : (
              <form
                onSubmit={handlePasswordSubmit(submitPasswordForm)}
                className="space-y-4"
              >
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">
                      Current Password
                    </label>
                    <Input
                      type="password"
                      {...registerPassword("currentPassword")}
                    />
                    {passwordErrors.currentPassword && (
                      <p className="text-sm text-destructive mt-1">
                        {passwordErrors.currentPassword.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">
                      New Password
                    </label>
                    <Input type="password" {...registerPassword("password")} />
                    {passwordErrors.password && (
                      <p className="text-sm text-destructive mt-1">
                        {passwordErrors.password.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">
                      Confirm New Password
                    </label>
                    <Input
                      type="password"
                      {...registerPassword("confirmPassword")}
                    />
                    {passwordErrors.confirmPassword && (
                      <p className="text-sm text-destructive mt-1">
                        {passwordErrors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={loading === "pending"}>
                    {loading === "pending" && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Update Password
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsChangingPassword(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
