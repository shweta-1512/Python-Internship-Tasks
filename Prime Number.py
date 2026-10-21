# Program 4: Prime Number

n = int(input("Enter a number: "))

if n <= 1:
    print("Not a prime number")
else:
    is_prime = True

    for i in range(2, n):
        if n % i == 0:
            is_prime = False
            break

    if is_prime:
        print("Prime number")
    else:
        print("Not a prime number")