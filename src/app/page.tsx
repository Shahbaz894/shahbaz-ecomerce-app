import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Learn more about the Transformer architecture
        </p>
      </div>

      {/* <div className="relative z-[-1] flex place-items-center my-10">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/transformer.png"
          alt="Transformer Architecture"
          width={600}
          height={400}
          priority
        />
      </div> */}
      
       <div className="relative z-[-1] flex place-items-center my-10">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/transformer1.jpg"  // Updated to .jpg
          alt="Transformer Architecture"  // Alt text for accessibility
          width={350}  // Width of the image in pixels
          height={350}  // Height of the image in pixels
          priority  // Optional: Load the image with priority
        />
      </div>
      <div className="absolute top-4 right-5 w-24 h-24 rounded-full overflow-hidden">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/shahbaz.jpeg"  // Updated to .jpg
          alt="Transformer Architecture"  // Alt text for accessibility
          width={150}  // Width of the image in pixels
          height={150}  // Height of the image in pixels
          priority  // Optional: Load the image with priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-3xl font-semibold">
            Transformer Architecture{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[80ch] text-lg opacity-75">
            The Transformer is a deep learning model introduced in the paper "Attention Is All You Need" by Vaswani et al. in 2017. It revolutionized natural language processing (NLP) by enabling models to understand context and relationships in data without relying on recurrent or convolutional layers. The core innovation of the Transformer is its self-attention mechanism, which allows the model to weigh the importance of different words in a sentence relative to one another, regardless of their position.
          </p>
          <br />
          <p className="m-0 max-w-[80ch] text-lg opacity-75">
            The Transformer architecture consists of an encoder and a decoder. The encoder processes the input sequence and generates a set of continuous representations, which the decoder then uses to produce the output sequence. Each layer in the encoder and decoder has a self-attention mechanism and a feed-forward neural network. The self-attention mechanism computes a weighted sum of the input features, where the weights are determined by the model's understanding of the input context.
          </p>
          <br />
          <p className="m-0 max-w-[80ch] text-lg opacity-75">
            One of the key components of the Transformer is the positional encoding, which injects information about the position of each word in the sequence into the model. This is crucial because, unlike recurrent models, the Transformer processes all words in the sequence simultaneously and needs some way to capture the order of words.
          </p>
          <br />
          <p className="m-0 max-w-[80ch] text-lg opacity-75">
            The impact of the Transformer architecture has been profound, leading to the development of powerful models like BERT, GPT, and T5, which have achieved state-of-the-art results in a wide range of NLP tasks. ChatGPT, for example, is based on the GPT architecture, which is a type of Transformer model trained on vast amounts of text data to generate human-like text based on input prompts.
          </p>
        </div>
      </div>
    </main>
  );
}
