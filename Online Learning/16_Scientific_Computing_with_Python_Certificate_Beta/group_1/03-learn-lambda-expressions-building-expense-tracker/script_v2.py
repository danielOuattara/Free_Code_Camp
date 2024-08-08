"""
Lambda functions give you a concise way to write small, throwaway 
functions in your code.

In this project, you'll explore the power of Lambda Functions by 
creating an expense tracker. Your resulting app will demonstrate 
how you can use Lambda Functions for efficient, streamlined operations.
"""


from typing import List, Dict, Iterator


def add_expense(expenses: List[Dict[str, float]], amount: float, category: str) -> None:
    """Add an expense to the list."""
    expenses.append({'amount': amount, 'category': category})


def print_expenses(expenses: List[Dict[str, float]]) -> None:
    """Print all expenses."""
    for expense in expenses:
        print(f'Amount: {expense["amount"]}, Category: {expense["category"]}')


def total_expenses(expenses: List[Dict[str, float]]) -> float:
    """Calculate the total amount of all expenses."""
    return sum(expense['amount'] for expense in expenses)


def filter_expenses_by_category(expenses: List[Dict[str, float]], category: str) -> List[Dict[str, float]]:
    """Filter expenses by category."""
    return [expense for expense in expenses if expense['category'] == category]


def main() -> None:
    expenses: List[Dict[str, float]] = []
    while True:
        print('\nExpense Tracker')
        print('1. Add an expense')
        print('2. List all expenses')
        print('3. Show total expenses')
        print('4. Filter expenses by category')
        print('5. Exit')

        choice = input('Enter your choice: ')

        if choice == '1':
            try:
                amount = float(input('Enter amount: '))
                category = input('Enter category: ')
                add_expense(expenses, amount, category)
            except ValueError:
                print('Invalid amount. Please enter a numeric value.')

        elif choice == '2':
            print('\nAll Expenses:')
            print_expenses(expenses)

        elif choice == '3':
            print('\nTotal Expenses: ', total_expenses(expenses))

        elif choice == '4':
            category = input('Enter category to filter: ')
            print(f'\nExpenses for {category}:')
            expenses_from_category = filter_expenses_by_category(
                expenses, category)
            print_expenses(expenses_from_category)

        elif choice == '5':
            print('Exiting the program.')
            break

        else:
            print('Invalid choice. Please select a number between 1 and 5.')


if __name__ == "__main__":
    main()
