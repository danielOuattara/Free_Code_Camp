"""
List Comprehension is a concise way to construct new lists 
from iterable types (e.g., lists, tuples, and strings) 
without using traditional loops or the .append() method.

In this project, you'll write a program that converts 
strings formatted in camelCase or PascalCase into snake_case.

The project has two phases:

1- Initial Implementation: Use a for loop to achieve the conversion.
2- Refinement: Use list comprehension to achieve the same result more concisely.


"""

from typing import str


def convert_to_snake_case(pascal_or_camel_cased_string: str) -> str:
    """
    Convert a camelCase or PascalCase string to snake_case.

    Parameters:
    - pascal_or_camel_cased_string: The input string in camelCase or PascalCase.

    Returns:
    - A string in snake_case.
    """
    if not pascal_or_camel_cased_string:
        return ""

    # Create the snake_case string using list comprehension
    snake_cased_char_list = ['_' + char.lower() if char.isupper()
                             else char for char in pascal_or_camel_cased_string]

    # Join the list into a single string and strip leading underscore
    return ''.join(snake_cased_char_list).lstrip('_')


def main() -> None:
    """
    Main function to demonstrate the conversion of different case strings to snake_case.
    """
    print(convert_to_snake_case('aLongAndComplexString')
          )  # Output: a_long_and_complex_string
    # Output: camel_case
    print(convert_to_snake_case('camelCase'))
    # Output: pascal_case
    print(convert_to_snake_case('PascalCase'))


if __name__ == "__main__":
    main()
