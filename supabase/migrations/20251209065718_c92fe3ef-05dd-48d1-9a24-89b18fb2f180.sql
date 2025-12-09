-- Create parking_logs table
CREATE TABLE public.parking_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  guest_name TEXT NOT NULL,
  phone_number TEXT,
  plate_number TEXT NOT NULL,
  venue TEXT NOT NULL,
  action TEXT NOT NULL CHECK (action IN ('register', 'in', 'out')),
  extra_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.parking_logs ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public registration)
CREATE POLICY "Anyone can insert parking logs" 
ON public.parking_logs 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to read parking logs (for admin viewing)
CREATE POLICY "Anyone can view parking logs" 
ON public.parking_logs 
FOR SELECT 
USING (true);