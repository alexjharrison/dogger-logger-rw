import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  CheckboxField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const DogForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.dog?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.dog?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="gender"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gender
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="dog-gender-0"
            name="gender"
            defaultValue="MALE"
            defaultChecked={props.dog?.gender?.includes('MALE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Male</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="dog-gender-1"
            name="gender"
            defaultValue="FEMALE"
            defaultChecked={props.dog?.gender?.includes('FEMALE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Female</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="dog-gender-2"
            name="gender"
            defaultValue="NON_BINARY"
            defaultChecked={props.dog?.gender?.includes('NON_BINARY')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Non Binary</div>
        </div>

        <FieldError name="gender" className="rw-field-error" />

        <Label
          name="weight"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Weight
        </Label>

        <TextField
          name="weight"
          defaultValue={props.dog?.weight}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="weight" className="rw-field-error" />

        <Label
          name="breed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Breed
        </Label>

        <TextField
          name="breed"
          defaultValue={props.dog?.breed}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="breed" className="rw-field-error" />

        <Label
          name="neutered"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Neutered
        </Label>

        <CheckboxField
          name="neutered"
          defaultChecked={props.dog?.neutered}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="neutered" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="dog-status-0"
            name="status"
            defaultValue="RECEIVING"
            defaultChecked={props.dog?.status?.includes('RECEIVING')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Receiving</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="dog-status-1"
            name="status"
            defaultValue="ADOPTION"
            defaultChecked={props.dog?.status?.includes('ADOPTION')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Adoption</div>
        </div>

        <FieldError name="status" className="rw-field-error" />

        <Label
          name="photoUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Photo url
        </Label>

        <TextField
          name="photoUrl"
          defaultValue={props.dog?.photoUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="photoUrl" className="rw-field-error" />

        <Label
          name="birthday"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Birthday
        </Label>

        <DatetimeLocalField
          name="birthday"
          defaultValue={formatDatetime(props.dog?.birthday)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="birthday" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DogForm
