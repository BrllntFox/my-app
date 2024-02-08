"use client"

import { Button, Chip, Input } from '@nextui-org/react';
import React, { useState, useEffect, KeyboardEvent, useRef } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { IEventForm } from './EventForm';
import { StringDecoder } from 'string_decoder';

interface TagInputProps {
  tags:string[];
  setTags: React.Dispatch<React.SetStateAction<string []>>;
}

const TagInput: React.FC<TagInputProps> = ({tags,setTags }:TagInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Tab' && inputValue.trim() !== '') {
      // Add the tag and clear the input

      if (!tags.includes(inputValue.trim())) {

        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    // Remove the tag
    setTags(tags?.filter(tags => tags !== tagToRemove.trim()))
  };

  // Notify parent component when tags change
  useEffect(() => {
    setTags(tags);
  }, [tags]);

  return (
    <div>

      {tags.map(tag => (
        <Chip key={tag} className="ml-1 mb-1" onClose={() => handleRemoveTag(tag)} variant="bordered" color="success">
          {tag}
        </Chip>
      ))}

      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyPress}
        placeholder="Press Tab to add a tag"
        endContent={
          <Button variant="shadow" type="button" size="sm" onClick={() => {
            if (inputValue.trim() !== '') {
              // Add the tag and clear the input

              if (!tags.includes(inputValue.trim())) {

                setTags([...tags, inputValue.trim()]);
              }
              setInputValue('')
            }
          }}>
            Add
          </Button>
        }
      />
    </div>
  );
};

export default TagInput;
