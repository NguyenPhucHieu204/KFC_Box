#!/usr/bin/env python3
"""
Generate little-endian u16 hex for a recipe.
Usage:
  ./scripts/gen_recipe_hex.py 120 15 5 300 250 12 50 1
Outputs the concatenated hex string and the byte array.
"""
import sys

def to_hex(vals):
    b = bytearray()
    for v in vals:
        if int(v) < 0 or int(v) > 0xFFFF:
            raise SystemExit(f"Value {v} out of u16 range")
        b.extend(int(v).to_bytes(2, 'little'))
    return b.hex()

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: gen_recipe_hex.py <v1> <v2> ... <vn>")
        sys.exit(1)
    vals = [int(x) for x in sys.argv[1:]]
    hexstr = to_hex(vals)
    print(f"Values: {vals}")
    print(f"Hex (little-endian u16): {hexstr}")
    print(f"Bytes: {bytes.fromhex(hexstr)}")
