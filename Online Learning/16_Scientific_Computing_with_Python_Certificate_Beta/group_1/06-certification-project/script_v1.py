"""

Build an Arithmetic Formatter Project
--------------------------------------

Students in primary school often arrange arithmetic problems
vertically to make them easier to solve.

For example, "235 + 52" becomes:

Example Code
  235
+  52
-----


Finish the arithmetic_arranger function that receives a list
of strings which are arithmetic problems, and returns the
problems arranged vertically and side-by-side.

The function should optionally take a second argument.
When the second argument is set to True, the answers should
be displayed.

Example

Function Call:

Example Code

arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])

Output:

Example Code
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
Function Call:

Example Code

arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)

Output:

Example Code
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474


Rules

The function will return the correct conversion if the supplied
problems are properly formatted, otherwise, it will return a
string that describes an error that is meaningful to the user.


# Situations that will return an error:

- If there are too many problems supplied to the function.
The limit is five, anything more will return: 'Error: Too many problems.'

- The appropriate operators the function will accept are addition
and subtraction. Multiplication and division will return an error.
Other operators not mentioned in this bullet point will not need
to be tested. The error returned will be: "Error: Operator must be '+' or '-'."

- Each number (operand) should only contain digits. Otherwise,
the function will return: 'Error: Numbers must only contain digits.'

- Each operand (aka number on each side of the operator) has a max
of four digits in width. Otherwise, the error string returned will be:
'Error: Numbers cannot be more than four digits.'



# If the user supplied the correct format of problems, the conversion
you return will follow these rules:

- There should be a single space between the operator and the longest
of the two operands, the operator will be on the same line as the
second operand, both operands will be in the same order as provided
(the first will be the top one and the second will be the bottom).

- Numbers should be right-aligned.

- There should be four spaces between each problem.

- There should be dashes at the bottom of each problem. The dashes
should run along the entire length of each problem individually.
(The example above shows what this should look like.)

- Note: open the browser console with F12 to see a more verbose output
of the tests.



# Tests

arithmetic_arranger(["3801 - 2", "123 + 49"]) should return   3801      123\n-    2    +  49\n------    -----.
arithmetic_arranger(["1 + 2", "1 - 9380"]) should return   1         1\n+ 2    - 9380\n---    ------.
arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"]) should return     3      3801      45      123\n+ 855    -    2    + 43    +  49\n-----    ------    ----    -----.
arithmetic_arranger(["11 + 4", "3801 - 2999", "1 + 2", "123 + 49", "1 - 9380"]) should return   11      3801      1      123         1\n+  4    - 2999    + 2    +  49    - 9380\n----    ------    ---    -----    ------.
arithmetic_arranger(["44 + 815", "909 - 2", "45 + 43", "123 + 49", "888 + 40", "653 + 87"]) should return 'Error: Too many problems.'.
arithmetic_arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"]) should return "Error: Operator must be '+' or '-'.".
arithmetic_arranger(["24 + 85215", "3801 - 2", "45 + 43", "123 + 49"]) should return 'Error: Numbers cannot be more than four digits.'.
arithmetic_arranger(["98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"]) should return 'Error: Numbers must only contain digits.'.
arithmetic_arranger(["3 + 855", "988 + 40"], True) should return     3      988\n+ 855    +  40\n-----    -----\n  858     1028.
arithmetic_arranger(["32 - 698", "1 - 3801", "45 + 43", "123 + 49", "988 + 40"], True) should return    32         1      45      123      988\n- 698    - 3801    + 43    +  49    +  40\n-----    ------    ----    -----    -----\n -666     -3800      88      172     1028.


"""


def apply_operator(a, b, operator):
    operators = {
        '+': lambda x, y: int(x) + int(y),
        '-': lambda x, y: int(x) - int(y),
    }
    return operators[operator](a, b)


def arithmetic_arranger(problems, show_answers=False):

    if len(problems) > 5:
        return 'Error: Too many problems.'

    first_line_all_operations = ""
    second_line_all_operations = ""
    line_bar = ""
    result_line = ""

    for single_operation in problems:

        # Split the problem into components
        operation_parts = single_operation.split()

        if len(operation_parts) != 3:
            return 'Error: Unbalanced number of operands by operation.'

        longest_operand = len(max(operation_parts, key=len))

        if longest_operand > 4:
            return 'Error: Numbers cannot be more than four digits.'

        # Split single operation into components
        first_number, operator, second_number = operation_parts

        # Check for valid operator
        if operator in ['*', '/']:
            return 'Error: Operator must be \'+\' or \'-\'.'

        # Check if numbers contain only digits
        if not (first_number.isdigit() and second_number.isdigit()):
            return 'Error: Numbers must only contain digits.'

        result_bar = longest_operand + 2
        separator = 4 * ' '

        first_line_all_operations += f'{first_number}'.rjust(
            result_bar, " ") + separator

        second_line_all_operations += f'{operator}'.ljust(2) + f'{second_number}'.rjust(
            result_bar - 2) + separator

        if show_answers:
            result_line += str(apply_operator(first_number,
                                              second_number, operator)).rjust(result_bar) + separator

        line_bar += result_bar * '-' + separator

    first_line_all_operations = first_line_all_operations.rstrip()
    second_line_all_operations = second_line_all_operations.rstrip()
    line_bar = line_bar.rstrip()

    if show_answers:
        return f'{first_line_all_operations}\n{second_line_all_operations}\n{line_bar}\n{result_line}'
    return f'{first_line_all_operations}\n{second_line_all_operations}\n{line_bar}'


if __name__ == '__main__':

    print(arithmetic_arranger(["3801 - 2", "123 + 49"]))
    print(arithmetic_arranger(["1 + 2", "1 - 9380"]))
    print(arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"]))
    print(arithmetic_arranger(
        ["11 + 4", "3801 - 2999", "1 + 2", "123 + 49", "1 - 9380"]))
    print(arithmetic_arranger(["44 + 815", "909 - 2", "45 + 43",
                               "123 + 49", "888 + 40", "653 + 87"]))
    print(arithmetic_arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"]))
    print(arithmetic_arranger(
        ["24 + 85215", "3801 - 2", "45 + 43", "123 + 49"]))
    print(arithmetic_arranger(["98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"]))
    print(arithmetic_arranger(["3 + 855", "988 + 40"], True))
    print(arithmetic_arranger(["32 - 698", "1 - 3801", "45 + 43",
                               "123 + 49", "988 + 40"], True))
