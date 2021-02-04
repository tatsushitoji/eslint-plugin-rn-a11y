# Enforces limit number of alt text

Alt text that is too long will be ignored by some screen readers. Ideally, it should fit within 125 characters.

## Type

suggestion

## Options

`limit: number`(optional): Set the maximum number of characters. default is `125`.

## Examples

### Not Good

```tsx
export const MaybeAccessibleComponent = () => {
  return (
    // 141 characters.
    <Image
      accessible
      accessibilityLabel="Our Market Research Shows That Players Like Really Long Card Names So We Made this Card to Have the Absolute Longest Card Name Ever Elemental"
      source={require('creature.jpg')}
    />
  )
}
```

### Good

```tsx
export const MaybeAccessibleComponent = () => {
  return (
    <Image
      accessible
      accessibilityLabel="The Ultimate Nightmare of Wizards of the Coast Customer Service"
      source={require('creature.jpg')}
    />
  )
}
```