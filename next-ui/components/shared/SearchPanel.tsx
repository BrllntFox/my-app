import React from "react";
import {Autocomplete, AutocompleteItem, Card, Input, MenuTriggerAction} from "@nextui-org/react";
import {useFilter} from "@react-aria/i18n";
import {animals} from "@/constants/index"

type FieldState = {
  selectedKey: React.Key | null;
  inputValue: string;
  items: typeof animals;
};

export default function SearchPanel() {
<section className="container basis-4/12 bg-green">

<Card className="flex items-start">
 <Input
 label="search"
 size="md"
 />
 </Card>
</section>
  // Store Autocomplete input value, selected option, open state, and items
  // in a state tracker
}
