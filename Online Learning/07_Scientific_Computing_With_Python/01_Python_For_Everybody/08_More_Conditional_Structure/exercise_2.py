

print("PAY DAY !!! ")

try:
    hours = float(input('Enter yours worked hours : '))
    rate = float(input('Enter yours rate pay : '))

except:
    print("Enter valid number input: ")
    quit()

if hours > 40:
    print("Overtime")
    regulated_rate = rate * 1.2
    pay_amount = float(hours) * float(regulated_rate)
else: 
    print("Regular")
    pay_amount = float(hours) * float(rate)

print('You pay is', str(pay_amount) + '$')


