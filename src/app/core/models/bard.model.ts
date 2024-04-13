export interface Prompt {
  role: string,
  parts: [{
    text: string
  }]
}

export interface Content{
  contents: Prompt[]
}
