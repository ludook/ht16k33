'use strict';

module.exports = {
    ' ': 0b0000000000000000,
    '!': 0b0000000000000110,
    '"': 0b0000001000100000,
    '#': 0b0001001011001110,
    '$': 0b0001001011101101,
    '%': 0b0000110000100100,
    '&': 0b0010001101011101,
    '\'': 0b0000010000000000,
    '(': 0b0010010000000000,
    ')': 0b0000100100000000,
    '*': 0b0011111111000000,
    '+': 0b0001001011000000,
    ',': 0b0000100000000000,
    '-': 0b0000000011000000,
    '.': 0b0100000000000000,
    '/': 0b0000110000000000,
    '0': 0b0000110000111111,
    '1': 0b0000000000000110,
    '2': 0b0000000011011011,
    '3': 0b0000000010001111,
    '4': 0b0000000011100110,
    '5': 0b0000000011101101,
    '6': 0b0000000011111101,
    '7': 0b0000000000000111,
    '8': 0b0000000011111111,
    '9': 0b0000000011101111,
    ':': 0b0001001000000000,
    ';': 0b0000101000000000,
    '<': 0b0010010000000000,
    '=': 0b0000000011001000,
    '>': 0b0000100100000000,
    '?': 0b0001000010000011,
    '@': 0b0000001010111011,
    'A': 0b0000000011110111,
    'B': 0b0001001010001111,
    'C': 0b0000000000111001,
    'D': 0b0001001000001111,
    'E': 0b0000000011111001,
    'F': 0b0000000001110001,
    'G': 0b0000000010111101,
    'H': 0b0000000011110110,
    'I': 0b0001001000000000,
    'J': 0b0000000000011110,
    'K': 0b0010010001110000,
    'L': 0b0000000000111000,
    'M': 0b0000010100110110,
    'N': 0b0010000100110110,
    'O': 0b0000000000111111,
    'P': 0b0000000011110011,
    'Q': 0b0010000000111111,
    'R': 0b0010000011110011,
    'S': 0b0010000001101001,
    'T': 0b0001001000000001,
    'U': 0b0000000000111110,
    'V': 0b0000110000110000,
    'W': 0b0010100000110110,
    'X': 0b0010110100000000,
    'Y': 0b0001010100000000,
    'Z': 0b0000110000001001,
    '[': 0b0000000000111001,
    '\\': 0b0010000100000000,
    ']': 0b0000000000001111,
    '^': 0b0000110000000011,
    '_': 0b0000000000001000,
    '`': 0b0000000100000000,
    'a': 0b0001000001011000,
    'b': 0b0010000001111000,
    'c': 0b0000000011011000,
    'd': 0b0000100010001110,
    'e': 0b0000100001011000,
    'f': 0b0000000001110001,
    'g': 0b0000010010001110,
    'h': 0b0001000001110000,
    'i': 0b0001000000000000,
    'j': 0b0000000000001110,
    'k': 0b0011011000000000,
    'l': 0b0000000000110000,
    'm': 0b0001000011010100,
    'n': 0b0001000001010000,
    'o': 0b0000000011011100,
    'p': 0b0000000101110000,
    'q': 0b0000010010000110,
    'r': 0b0000000001010000,
    's': 0b0010000010001000,
    't': 0b0000000001111000,
    'u': 0b0000000000011100,
    'v': 0b0010000000000100,
    'w': 0b0010100000010100,
    'x': 0b0010100011000000,
    'y': 0b0010000000001100,
    'z': 0b0000100001001000,
    '{': 0b0000100101001001,
    '|': 0b0001001000000000,
    '}': 0b0010010010001001,
    '~': 0b0000010100100000,

    '#roll0_': 0b0000000011000000,
    '#roll1_': 0b0000010000000000,
    '#roll2_': 0b0001001000000000,
    '#roll3_': 0b0000110000000000,

    '#fullClock0_': 0b0000000000000000,
    '#fullClock1_': 0b0000000000000001,
    '#fullClock2_': 0b0000000000000011,
    '#fullClock3_': 0b0000000000000111,
    '#fullClock4_': 0b0000000000001111,
    '#fullClock5_': 0b0000000000011111,
    '#fullClock6_': 0b0000000000111111,
    '#fullClock7_': 0b0000000001111111,
    '#fullClock8_': 0b0000000011111111,
    '#fullClock9_': 0b0010000011111111,
    '#fullClock10_': 0b0011000011111111,
    '#fullClock11_': 0b0011100011111111,
    '#fullClock12_': 0b0011100111111111,
    '#fullClock13_': 0b0011101111111111,
    '#fullClock14_': 0b0011111111111111,

    '#emptyClock0_': 0b0011111111111111,
    '#emptyClock1_': 0b0011111111111110,
    '#emptyClock2_': 0b0011111111111100,
    '#emptyClock3_': 0b0011111111111000,
    '#emptyClock4_': 0b0011111111110000,
    '#emptyClock5_': 0b0011111111100000,
    '#emptyClock6_': 0b0011111111000000,
    '#emptyClock7_': 0b0011111110000000,
    '#emptyClock8_': 0b0011111100000000,
    '#emptyClock9_': 0b0001111100000000,
    '#emptyClock10_': 0b0000111100000000,
    '#emptyClock11_': 0b0000011100000000,
    '#emptyClock12_': 0b0000011000000000,
    '#emptyClock13_': 0b0000010000000000,
    '#emptyClock14_': 0b0000000000000000,

    '#full_': 0b0011111111111111,
    '#fullDot_': 0b0111111111111111,
    '#top_': 0b0000000000000001,
    '#topRight_': 0b0000000000000010,
    '#bottomRight_': 0b0000000000000100,
    '#bottom_': 0b0000000000001000,
    '#bottomLeft_': 0b0000000000010000,
    '#topLeft_': 0b0000000000100000,
    '#centerLeft_': 0b0000000001000000,
    '#centerRight_': 0b0000000010000000,
    '#centerTopLeft_': 0b0000000100000000,
    '#centerTop_': 0b0000001000000000,
    '#centerTopRight_': 0b0000010000000000,
    '#centerBottomLeft_': 0b0000100000000000,
    '#centerBottom_': 0b0001000000000000,
    '#centerBottomRight_': 0b0010000000000000,
};