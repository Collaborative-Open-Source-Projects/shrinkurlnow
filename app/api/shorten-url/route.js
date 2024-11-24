import { supabase } from '../../../lib/supabase/supabaseClient'
import { isValidUrl } from '../../../lib/validUrlCheck'
import { checkUrlExists } from '../../../lib/supabase/checkUrlExists';
import { nanoid } from 'nanoid'

export async function POST(req) {
  try {
    const { long_url } = await req.json()

    // Check whether URL is valid
    if (!long_url || !isValidUrl(long_url)) {
      return new Response(
        JSON.stringify({ status: 'Failed', message: 'Invalid URL' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Check if Long URL already exists
    const { exists, shortUrl } = await checkUrlExists(long_url);

    if (exists) {
      return new Response(
        JSON.stringify({ status: 'Exists', short_url: `${process.env.BASE_URL}/${shortUrl}` }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Shorten URL and other columns
    const short_url = nanoid(8)
    const currentDate = new Date(); 

    const expiryDate = new Date(currentDate);
    expiryDate.setDate(currentDate.getDate() + 7);
    
    const created_at = currentDate.toISOString(); 
    const expiry_at = expiryDate.toISOString();

    // Store details in table
    const { data, error } = await supabase
      .from('url_pair')
      .insert([
        { 
          long_url: long_url, 
          short_url: short_url,
          created_at: created_at,
          expiry_at: expiry_at,
          user_id: 3,
          views: 0
        }
      ])

    if (error) {
      throw error
    }

    return new Response(
      JSON.stringify({ status: 'Success', short_url: `${process.env.BASE_URL}/${short_url}` }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ status: 'Failed', message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}