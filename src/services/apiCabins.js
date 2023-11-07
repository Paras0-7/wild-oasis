/* eslint-disable no-unused-vars */
import { supabase } from "./supabase";

export const getCabins = async function () {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return cabins;
};

export const deleteCabin = async function (id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
};

export const addCabin = async function (newCabin) {
  const imgName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
  const imgPath = `https://gxdzflktgpvjjtvtkhse.supabase.co/storage/v1/object/public/cabin-images/${imgName}`;
  // https://gxdzflktgpvjjtvtkhse.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const { data, error } = await supabase.from("cabins").insert([{ ...newCabin, image: imgPath }]);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  const { error: storageError } = await supabase.storage.from("cabin-images").upload(imgName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Cabin image could not be uploaded");
  }
};

export const editCabin = async function (cabin) {
  const { data, error } = await supabase.from("cabins").update(cabin).eq("id", cabin.id).select();
};
