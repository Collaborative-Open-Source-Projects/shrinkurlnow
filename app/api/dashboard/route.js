import { supabase } from "@/lib/supabase/supabaseClient";

export async function POST(req) {
    try {
        const { shortcode } = await req.json()

        if (!shortcode) {
            return new Response(JSON.stringify({message: 'Shortcode is required'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const { error: insertError } = await supabase
            .from("url_stats")
            .insert({
                short_url: shortcode,
                date: new Date(),            
            })
    
        if (insertError) {
        return new Response(
            JSON.stringify({ 
                message: 'Error inserting data' 
            }), { 
                status: 404, headers: { 'Content-Type': 'application/json' } });
        }
    
        return new Response(JSON.stringify({ message: "Successfull added" }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.log("heree error")
        console.error('Error:', error.message)
        return new Response(
            JSON.stringify({ status: 'Failed', message: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        )
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const shortcode = searchParams.get('shortcode');
  
    if (!shortcode) {
      return new Response(JSON.stringify({message: 'Shortcode is required'}), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
  
    const { data, error } = await supabase
      .from("url_stats")
      .select("id", { count: "exact" }) 
  
    if (error || !data) {
      return new Response(JSON.stringify({ message: 'error' }), { status: 404 });
    }

    const totalViews = data.length;
    return new Response(JSON.stringify({ totalViews: totalViews }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
