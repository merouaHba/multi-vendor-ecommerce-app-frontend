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
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8 max-w-2xl">
      <div className="space-y-4 sm:space-y-6">
        {/* Profile Picture Section */}
        <Card className="overflow-hidden">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
                  <AvatarImage src={user?.profilePicture} alt={user?.name} />
                  <AvatarFallback className="text-lg sm:text-xl">
                    {user?.name
                      ?.split(" ")
                      .map((n: string) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 flex gap-2">
                  <label
                    htmlFor="avatar-upload"
                    className="p-1.5 sm:p-2 bg-primary text-white rounded-full cursor-pointer hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isUploading ? (
                      <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                    ) : (
                      <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </label>
                  {user?.profilePicture && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button
                          className="p-1.5 sm:p-2 bg-destructive text-white rounded-full cursor-pointer hover:bg-destructive/90 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isUploading}
                        >
                          <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="sm:max-w-[425px]">
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
              <p className="text-sm text-muted-foreground text-center px-2">
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
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Current Password
                    </label>
                    <Input
                      type="password"
                      {...registerPassword("currentPassword")}
                      className="w-full sm:w-2/3"
                    />
                    {passwordErrors.currentPassword && (
                      <p className="text-sm text-destructive">
                        {passwordErrors.currentPassword.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      New Password
                    </label>
                    <Input
                      type="password"
                      {...registerPassword("password")}
                      className="w-full sm:w-2/3"
                    />
                    {passwordErrors.password && (
                      <p className="text-sm text-destructive">
                        {passwordErrors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Confirm New Password
                    </label>
                    <Input
                      type="password"
                      {...registerPassword("confirmPassword")}
                      className="w-full sm:w-2/3"
                    />
                    {passwordErrors.confirmPassword && (
                      <p className="text-sm text-destructive">
                        {passwordErrors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
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
