import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  DatetimeLocalField,
  CheckboxField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const WalkForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.walk?.id)
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
          name="dogId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Dog id
        </Label>

        <NumberField
          name="dogId"
          defaultValue={props.walk?.dogId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dogId" className="rw-field-error" />

        <Label
          name="walkerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Walker id
        </Label>

        <NumberField
          name="walkerId"
          defaultValue={props.walk?.walkerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="walkerId" className="rw-field-error" />

        <Label
          name="time"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Time
        </Label>

        <DatetimeLocalField
          name="time"
          defaultValue={formatDatetime(props.walk?.time)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="time" className="rw-field-error" />

        <Label
          name="lengthMinutes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Length minutes
        </Label>

        <NumberField
          name="lengthMinutes"
          defaultValue={props.walk?.lengthMinutes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lengthMinutes" className="rw-field-error" />

        <Label
          name="didPoop"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Did poop
        </Label>

        <CheckboxField
          name="didPoop"
          defaultChecked={props.walk?.didPoop}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="didPoop" className="rw-field-error" />

        <Label
          name="didPee"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Did pee
        </Label>

        <CheckboxField
          name="didPee"
          defaultChecked={props.walk?.didPee}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="didPee" className="rw-field-error" />

        <Label
          name="medicalConcerns"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Medical concerns
        </Label>

        <TextField
          name="medicalConcerns"
          defaultValue={props.walk?.medicalConcerns}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="medicalConcerns" className="rw-field-error" />

        <Label
          name="numJumps"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Num jumps
        </Label>

        <NumberField
          name="numJumps"
          defaultValue={props.walk?.numJumps}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="numJumps" className="rw-field-error" />

        <Label
          name="jumpHandlage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Jump handlage
        </Label>

        <TextField
          name="jumpHandlage"
          defaultValue={props.walk?.jumpHandlage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="jumpHandlage" className="rw-field-error" />

        <Label
          name="numMouthings"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Num mouthings
        </Label>

        <NumberField
          name="numMouthings"
          defaultValue={props.walk?.numMouthings}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="numMouthings" className="rw-field-error" />

        <Label
          name="mouthingsHandlage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mouthings handlage
        </Label>

        <TextField
          name="mouthingsHandlage"
          defaultValue={props.walk?.mouthingsHandlage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="mouthingsHandlage" className="rw-field-error" />

        <Label
          name="dogsSeen"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Dogs seen
        </Label>

        <NumberField
          name="dogsSeen"
          defaultValue={props.walk?.dogsSeen}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dogsSeen" className="rw-field-error" />

        <Label
          name="dogsSeenReacted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Dogs seen reacted
        </Label>

        <NumberField
          name="dogsSeenReacted"
          defaultValue={props.walk?.dogsSeenReacted}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dogsSeenReacted" className="rw-field-error" />

        <Label
          name="seenDogReaction"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Seen dog reaction
        </Label>

        <TextField
          name="seenDogReaction"
          defaultValue={props.walk?.seenDogReaction}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="seenDogReaction" className="rw-field-error" />

        <Label
          name="otherConcerns"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Other concerns
        </Label>

        <TextField
          name="otherConcerns"
          defaultValue={props.walk?.otherConcerns}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="otherConcerns" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default WalkForm
