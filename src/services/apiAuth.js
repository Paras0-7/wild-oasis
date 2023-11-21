/* eslint-disable no-unused-vars */
import { supabase } from "./supabase";

export const login = async function ({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getCurrentUser = async function () {
  //get active session
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return user?.user;
};

export const logOutUser = async function () {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};

export const createUser = async function ({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: fullName,
        avatar: "",
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export async function updateCurrentUser({ password, name, avatar }) {
  let newData;
  if (password) newData = { password };
  else newData = { data: { name } };
  const { data, error } = await supabase.auth.updateUser(newData);

  if (error) {
    throw new Error(error.message);
  }

  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage.from("avatars").upload(fileName, avatar);

  if (storageError) {
    throw new Error(storageError.message);
  }
  const { data: updatedUser } = await supabase.auth.updateUser({
    data: {
      avatar: `https://gxdzflktgpvjjtvtkhse.supabase.co/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  return updatedUser;
}
