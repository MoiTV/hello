array = [3, 5, -4, 4, 8, 11, 1, -1]
targetSum = 10


def twoNumberSumHash(targetSum, array):
    nums = {}

    for num in array:
        if targetSum - num in nums:
            return [targetSum - num, num]

        else:
            nums[num] = True

    return []


print(twoNumberSumHash(targetSum, array))
