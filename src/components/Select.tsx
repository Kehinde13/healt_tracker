"use client"

import { createListCollection } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"

const Select = () => {
  return (
    <SelectRoot collection={months} size="sm" w='150px'>
      <SelectTrigger>
        <SelectValueText placeholder="Select month" />
      </SelectTrigger>
      <SelectContent>
        {months.items.map((month) => (
          <SelectItem item={month} key={month.value}>
            {month.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  )
}

const months = createListCollection({
  items: [
    { label: "jan", value: "jan" },
    { label: "feb", value: "feb" },
    { label: "mar", value: "mar" },
    { label: "apr", value: "apr" },
  ],
})

export default Select
