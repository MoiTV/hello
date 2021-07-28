array = [3, 5, -4, 4, 8, 11, 1, -1, 6]
targetSum = 10


def twoNumberSum(targetSum, array):
    array.sort()

    left = 0
    right = len(array) - 1

    while left < right:
        currentSum = array[left] + array[right]

        if currentSum == targetSum:
            return [array[left], array[right]]

        elif currentSum > targetSum:
            right -= 1

        elif currentSum < targetSum:
            left += 1

    return []


print(twoNumberSum(targetSum, array))
