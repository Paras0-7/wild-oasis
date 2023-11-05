/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { Button } from "../../ui/Button/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { FormRow } from "../../ui/Form/FormRow";

export const CreateCabinForm = function ({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const editSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: editSession && editValues,
  });
  const { errors } = formState;
  console.log(errors);
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: addCabin,
    onSuccess: () => {
      toast.success("New cabin added 🥳");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  const onSubmit = function (data) {
    mutate({ ...data, image: data.image[0] });
  };

  const onError = function (errors) {
    console.log(errors);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          disabled={isLoading}
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Max Capacity" error={errors?.maxCapacity?.message}>
        <Input
          disabled={isLoading}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be atleast 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Price" error={errors?.regularPrice?.message}>
        <Input
          disabled={isLoading}
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be atleast 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          disabled={isLoading}
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) => value < getValues().regularPrice || "Discount should be less than the regular price",
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      {!editSession && (
        <FormRow label="Cabin Photo">
          <FileInput
            disabled={isLoading}
            id="image"
            accept="image/*"
            {...register("image", {
              required: "This field is required",
            })}
          />
        </FormRow>
      )}

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>{editSession ? "Edit Cabin" : "Add cabin"}</Button>
      </FormRow>
    </Form>
  );
};
