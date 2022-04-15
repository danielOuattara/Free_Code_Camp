try:
	hours_worked = float(input("Enter Your Worked hours: "))
	pay_rate= float(input("Enter Your Rated Pay: "))
except:
	print("Error, pleas enter numeric input Only")
	
print(hours_worked,  pay_rate)

if hours_worked > 40:
	regular_pay = hours_worked * pay_rate
	optimized = (hours_worked - 40.0) * (pay_rate * 0.5)
	salary = regular_pay + optimized
else:
	salary = hours_worked * pay_rate

print("Pay is: ", salary )

