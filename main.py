# a method that prints out odd numbers from 1-99


def oddNumbers():
    for i in range(100):
        if i % 3 != 0:
            print(i)


oddNumbers()
