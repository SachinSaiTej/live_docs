import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserTypeSelector = ({
  userType,
  setUserType,
  onClickHandler,
}: UserTypeSelectorParams) => {
    const accessChangeHandler = (type:UserType)=>{
        setUserType(type);
        onClickHandler && onClickHandler(type);
    };
  return (
    <Select value={userType} onValueChange={(type:UserType)=>accessChangeHandler(type)}>
      <SelectTrigger className="shad-select">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border-none bg-dark-200">
        <SelectItem value="viewer">Can View</SelectItem>
        <SelectItem value="editor">Can Edit</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UserTypeSelector;
