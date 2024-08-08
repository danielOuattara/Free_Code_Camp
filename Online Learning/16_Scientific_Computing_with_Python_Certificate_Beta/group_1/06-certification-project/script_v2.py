def apply_operator(a, b, operator):
    operators = {
        '+': lambda x, y: int(x) + int(y),
        '-': lambda x, y: int(x) - int(y),
    }
    if operator in operators:
        return operators[operator](a, b)
    raise ValueError("Error: Operator must be '+' or '-'.")


def arithmetic_arranger(problems, show_answers=False):
    if len(problems) > 5:
        return 'Error: Too many problems.'

    first_line = ""
    second_line = ""
    line_bar = ""
    result_line = ""

    for problem in problems:
        # Split the problem into components
        parts = problem.split()
        if len(parts) != 3:
            return 'Error: Too many operands.'

        first_num, operator, second_num = parts

        # Check for valid operator
        if operator not in ['+', '-']:
            return 'Error: Operator must be \'+\' or \'-\'.'

        # Check if numbers contain only digits
        if not (first_num.isdigit() and second_num.isdigit()):
            return 'Error: Numbers must only contain digits.'

        # Check if numbers have at most four digits
        if len(first_num) > 4 or len(second_num) > 4:
            return 'Error: Numbers cannot be more than four digits.'

        # Calculate width for each problem
        width = max(len(first_num), len(second_num)) + 2
        separator = ' ' * 4

        # Format the problem components
        first_line += f"{first_num.rjust(width)}{separator}"
        second_line += f"{operator} {second_num.rjust(width - 2)}{separator}"
        line_bar += '-' * width + separator

        if show_answers:
            result = apply_operator(first_num, second_num, operator)
            result_line += f"{str(result).rjust(width)}{separator}"

    # Remove the trailing separator from each line
    first_line = first_line.rstrip()
    second_line = second_line.rstrip()
    line_bar = line_bar.rstrip()
    if show_answers:
        result_line = result_line.rstrip()

    # Construct the final result
    if show_answers:
        return f"{first_line}\n{second_line}\n{line_bar}\n{result_line}"

    return f"{first_line}\n{second_line}\n{line_bar}"


# Example Usage
if __name__ == '__main__':
    print(arithmetic_arranger(["3801 - 2", "123 + 49"]))
    print(arithmetic_arranger(["1 + 2", "1 - 9380"]))
    print(arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"]))
    print(arithmetic_arranger(
        ["11 + 4", "3801 - 2999", "1 + 2", "123 + 49", "1 - 9380"]))
    print(arithmetic_arranger(["44 + 815", "909 - 2",
          "45 + 43", "123 + 49", "888 + 40", "653 + 87"]))
    print(arithmetic_arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"]))
    print(arithmetic_arranger(
        ["24 + 85215", "3801 - 2", "45 + 43", "123 + 49"]))
    print(arithmetic_arranger(["98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"]))
    print(arithmetic_arranger(["3 + 855", "988 + 40"], True))
    print(arithmetic_arranger(
        ["32 - 698", "1 - 3801", "45 + 43", "123 + 49", "988 + 40"], True))
