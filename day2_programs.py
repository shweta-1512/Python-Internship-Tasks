# Python Practice Programs - Day 2

while True:
    print("\n===== PYTHON PROGRAMS =====")
    print("1. Even or Odd")
    print("2. Largest of Three Numbers")
    print("3. Factorial")
    print("4. Prime Number")
    print("5. Reverse a Number")
    print("6. Multiplication Table")
    print("0. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        n = int(input("Enter a number: "))
        if n % 2 == 0:
            print("Even number")
        else:
            print("Odd number")

    elif choice == "2":
        a = int(input("Enter first number: "))
        b = int(input("Enter second number: "))
        c = int(input("Enter third number: "))

        if a >= b and a >= c:
            print("Largest number:", a)
        elif b >= a and b >= c:
            print("Largest number:", b)
        else:
            print("Largest number:", c)

    elif choice == "3":
        n = int(input("Enter a number: "))
        if n < 0:
            print("Factorial is not defined for negative numbers.")
        else:
            fact = 1
            for i in range(1, n + 1):
                fact *= i
            print("Factorial:", fact)

    elif choice == "4":
        n = int(input("Enter a number: "))
        if n <= 1:
            print("Not a prime number")
        else:
            prime = True
            for i in range(2, int(n ** 0.5) + 1):
                if n % i == 0:
                    prime = False
                    break

            if prime:
                print("Prime number")
            else:
                print("Not a prime number")

    elif choice == "5":
        n = int(input("Enter a number: "))
        sign = -1 if n < 0 else 1
        n = abs(n)
        reverse = 0

        while n > 0:
            digit = n % 10
            reverse = reverse * 10 + digit
            n //= 10

        print("Reversed number:", sign * reverse)

    elif choice == "6":
        n = int(input("Enter a number: "))
        for i in range(1, 11):
            print(n, "x", i, "=", n * i)

    elif choice == "0":
        print("Program ended.")
        break

    else:
        print("Invalid choice. Please select 0 to 6.")