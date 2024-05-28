'''
Secret Santa

Given a list of players, pair up players so that:

1. Each player gives a gift once
2. Each player receives a gift once
3. Players cannot give or receive to themselves
4. Selections must be random

Example input: ['Barney', 'Wilma', 'Fred', 'Pebbles', 'Bam Bam']
Example output: [['Barney', 'Wilma'], ['Fred', 'Betty'], ['etc', 'etc']]

Source: https://www.youtube.com/watch?v=y7FtwrjWXCg
'''
import random

def make_pairs(players):
    unrandomised = players.copy()
    randomised = []
    while unrandomised != []:
        player = random.choice(unrandomised)
        unrandomised.remove(player)
        randomised.append(player)
    pairs = []
    for i, _ in enumerate(randomised):
        pairs.append([randomised[i], randomised[(i + 1) % len(randomised)]])
    return pairs

players = ['Barney', 'Wilma', 'Fred', 'Pebbles', 'Bam Bam']

print('input: ', players)
print('output: ', make_pairs(players))
