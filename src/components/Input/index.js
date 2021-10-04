import { InputContainer } from "./styles";

export function Input({ value, onChange }) {
    return (
        <InputContainer value={value} onChange={onChange} />
    )
}