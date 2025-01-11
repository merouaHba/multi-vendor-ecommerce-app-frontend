import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  actGetUser,
  actUpdateUser,
  actUpdatePassword,
  resetUI,
  actUpdateProfilePicture,
  actDeleteProfilePicture,
} from "@/store/auth/authSlice";
import { toast } from "react-toastify";
import { ProfileFormType, profileSchema } from "@/validations/profileSchema";
import { PasswordFormType, passwordSchema } from "@/validations/passwordSchema";

const useProfile = () => {
  const dispatch = useAppDispatch();
  const { error, loading, user } = useAppSelector((state) => state.auth);
    const [isUploading, setIsUploading] = useState(false);


  // profile form
  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    reset: resetProfile,
    formState: { errors: profileErrors },
  } = useForm<ProfileFormType>({
    mode: "onBlur",
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstname: user?.firstname || "",
      lastname: user?.lastname || "",
      email: user?.email || "",
      mobile: user?.mobile || "",
      address: user?.address || "",
    },
  });

  // password form
  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    reset: resetPassword,
    formState: { errors: passwordErrors },
  } = useForm<PasswordFormType>({
    mode: "onBlur",
    resolver: zodResolver(passwordSchema),
  });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploading(true);
      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!validTypes.includes(file.type)) {
        toast.error("Please upload a valid image file (JPEG, PNG, or WebP)", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        });
        return;
      }

      // Validate file size (e.g., 5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        toast.error("Image size should be less than 5MB", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        });
        return;
      }

      // Create FormData
      const formData = new FormData();
      formData.append("image", file);

      // Show loading toast
      toast.loading("Uploading image...", {
        position: "top-right",
        autoClose: false,
        toastId: "uploadingImage",
      });

      // Dispatch update action
      await dispatch(actUpdateProfilePicture(formData)).unwrap();

      // Dismiss loading toast and show success
      toast.dismiss("uploadingImage");
      toast.success("Profile picture updated successfully", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    } catch (error) {
      // Dismiss loading toast if there's an error
      toast.dismiss("uploadingImage");

      toast.error((error as string) || "Failed to update profile picture", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    } finally {
       e.target.value = "";
      setIsUploading(false);
    }
  };

    const handleDeleteImage = async () => {
      try {
        setIsUploading(true);
        await dispatch(actDeleteProfilePicture()).unwrap();

        toast.success("Profile picture removed successfully", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
      } catch (error) {
        toast.error(error as string, {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        });
      } finally {
        setIsUploading(false);
      }
    };

  const submitProfileForm: SubmitHandler<ProfileFormType> = async (data) => {
    try {
      const currentUserData = {
        firstname: user?.firstname || "",
        lastname: user?.lastname || "",
        email: user?.email || "",
        mobile: user?.mobile || "",
        address: user?.address || "",
      };

      const formData = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        mobile: data.mobile,
        address: data.address,
      };


      const hasChanges =
        JSON.stringify(currentUserData) !== JSON.stringify(formData);


      if (!hasChanges) {
        toast.warn("No changes detected", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        return;
      }

      await dispatch(actUpdateUser(data)).unwrap();
      toast.success("Profile updated successfully", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    } catch (error) {
      toast.error(error as string, {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    }
  };

  const submitPasswordForm: SubmitHandler<PasswordFormType> = async (data) => {
    try {
        if (data.currentPassword === data.password) {
          toast.warn("New password must be different from current password", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
          return;
        }
      await dispatch(actUpdatePassword(data)).unwrap();
      resetPassword();
      toast.success("Password updated successfully", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    } catch (error) {
      toast.error(error as string, {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    }
  };

  // Fetch user data on mount
  useEffect(() => {
    const getUser = async () => {
      try {
        await dispatch(actGetUser()).unwrap();
      } catch (error) {
        toast.error(error as string, {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
        });
      }
    };

    getUser();

    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  // Update form defaults when user data changes
  useEffect(() => {
    if (user) {
      resetProfile({
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        email: user.email || "",
        mobile: user.mobile || "",
        address: user.address || "",
      });
    }
  }, [user, resetProfile]);

  return {
    // State
    error,
    loading,
    isUploading,
    user,
    profileErrors,
    passwordErrors,

    // Profile form
    registerProfile,
    handleProfileSubmit,
    submitProfileForm,

    // Password form
    registerPassword,
    handlePasswordSubmit,
    submitPasswordForm,

    // Image upload
    handleImageChange,
    handleDeleteImage,
  };
};

export default useProfile;
