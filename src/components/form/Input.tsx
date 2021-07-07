import {Input, FormControl, InputProps as NextInputProps, FormErrorMessage} from "@chakra-ui/react"
import {FieldError} from 'react-hook-form'
interface InputProps extends NextInputProps {
  name: string
  placeholder:string;
  type:string;
  error?: FieldError;
}

export const NextInput = ({name, error=null, placeholder, type, ...props}:InputProps)=>{
  return(
    <FormControl isInvalid={!!error}>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        fontSize={["sm", "lg"]}
        focusBorderColor="yellow.500"
        bgColor="gray.900"
        size="lg"
        {...props}
    />
     {!!error && (
       <FormErrorMessage>
         {error.message}
       </FormErrorMessage>
     )}
    </FormControl>
    
    
  )
}