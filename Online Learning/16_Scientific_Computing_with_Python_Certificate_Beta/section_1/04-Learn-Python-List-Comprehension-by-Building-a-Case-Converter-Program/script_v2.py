"""
List Comprehension is a way to construct a new Python list 
from an iterable types: lists, tuples, and strings. 
All without using a for loop or the `.append()` list method.

In this project, you'll write a program that takes a string 
formatted in camelCase or PascalCase, then converts it into 
snake_case.

The project has two phases: first you'll use a for loop to 
implement the program. Then you'll learn how to use List 
Comprehension instead of a loop to achieve the same results."""


#  Using ``


def convert_to_snake_case(pascal_or_camel_cased_string):
    snake_cased_char_list = ['_' + char.lower() if char.isupper()
                             else char for char in pascal_or_camel_cased_string]
    return ''.join(snake_cased_char_list).lstrip('_')


def main():
    print(convert_to_snake_case('aLongAndComplexString'))
    print(convert_to_snake_case("camelCase"))
    print(convert_to_snake_case("PascalCase"))


if __name__ == "__main__":
    main()
