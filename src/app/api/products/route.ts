export async function GET() {
    const products = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
    ];
  
    // const products = await fetch()


    return new Response(JSON.stringify(products), {
      status: 200,
    });
  }