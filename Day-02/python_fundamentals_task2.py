# Day 1 - Python Fundamentals

# 1. Even or Odd
num = int(input("Enter a number: "))

if num % 2 == 0:
    print("Even Number")
else:
    print("Odd Number")


# 2. Largest of Three Numbers
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
c = int(input("Enter third number: "))

if a >= b and a >= c:
    print("Largest:", a)
elif b >= a and b >= c:
    print("Largest:", b)
else:
    print("Largest:", c)


# 3. Factorial
num = int(input("Enter a number for factorial: "))
factorial = 1

if num < 0:
    print("Factorial is not defined for negative numbers")
else:
    for i in range(1, num + 1):
        factorial *= i
    print("Factorial:", factorial)


# 4. Prime Number
num = int(input("Enter a number to check prime: "))

if num <= 1:
    print("Not a Prime Number")
else:
    for i in range(2, num):
        if num % i == 0:
            print("Not a Prime Number")
            break
    else:
        print("Prime Number")


# 5. Reverse a Number
num = int(input("Enter a number to reverse: "))
reverse = 0

while num > 0:
    digit = num % 10
    reverse = reverse * 10 + digit
    num //= 10

print("Reversed Number:", reverse)


# 6. Multiplication Table
num = int(input("Enter a number for multiplication table: "))

for i in range(1, 11):
    print(num, "x", i, "=", num * i)# Day 2 task
