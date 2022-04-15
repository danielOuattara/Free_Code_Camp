
# try / catch

a_str = 'Hello Bob'

try:
    int_str  = int(a_str)
except: 
    int_str = -1

print('First =', int_str)

#---------------------------

a_str = '123'
try:
    int_str  = int(a_str)
except: 
    int_str = -1

print('Second  =', int_str)

#---------------------------

a_str = '123a'
try:
    int_str  = int(a_str)
    print('Never printed if exception occurs')
except: 
    int_str = -1

print('Third  =', int_str)

#--------------------------- user input

user_input = input('Enter a number :')
try:
    int_user_input  = int(user_input)
    print('Never printed if exception occurs')
except: 
    int_user_input = "Please, enter a number"

print('Response  =', int_user_input)