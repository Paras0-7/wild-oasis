/* eslint-disable no-unused-vars */
import { useSetting } from "../../hooks/useSetting";
import { useUpdateSetting } from "../../hooks/useUpdateSetting";
import Form from "../../ui/Form";
import { FormRow } from "../../ui/Form/FormRow";
import Input from "../../ui/Input";
import { Spinner } from "../../ui/spinner/Spinner";

function UpdateSettingsForm() {
  const { isLoading, settingData: { minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice } = {} } = useSetting();
  const { isUpdating, editSettings } = useUpdateSetting();
  if (isLoading) return <Spinner />;
  const submitHandler = function (e, field) {
    const { value } = e.target;
    if (!value) return;

    editSettings({ [field]: value });
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormRow label="Minimum nights/booking">
        <Input type="number" id="min-nights" defaultValue={minBookingLength} disabled={isUpdating} onBlur={(e) => submitHandler(e, "minBookingLength")} />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input type="number" id="max-nights" defaultValue={maxBookingLength} disabled={isUpdating} onBlur={(e) => submitHandler(e, "maxBookingLength")} />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input type="number" id="max-guests" defaultValue={maxGuestsPerBooking} disabled={isUpdating} onBlur={(e) => submitHandler(e, "maxGuestsPerBooking")} />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input type="number" id="breakfast-price" defaultValue={breakfastPrice} disabled={isUpdating} onBlur={(e) => submitHandler(e, "breakfastPrice")} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
