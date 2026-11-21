#!/usr/bin/env python3
"""
Python Od Nule - Lokalni Web Server
Pokreće jednostavan HTTP server za učenje osnova Python programiranja.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

DEFAULT_PORT = 8000

def find_available_port(start_port):
    import socket
    port = start_port
    while port < start_port + 50:
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
                s.bind(('', port))
                return port
        except OSError:
            port += 1
    return start_port

def run_server():
    # Promeni radni direktorijum na direktorijum gde se nalazi ova skripta
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    port = find_available_port(DEFAULT_PORT)
    handler = http.server.SimpleHTTPRequestHandler
    
    # Dozvoli ponovno korišćenje porta odmah
    socketserver.TCPServer.allow_reuse_address = True
    
    # Dodaj ispravne MIME tipove ako nedostaju
    handler.extensions_map.update({
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.json': 'application/json',
    })

    try:
        class ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
            daemon_threads = True
            allow_reuse_address = True

        with ThreadingHTTPServer(("", port), handler) as httpd:
            url = f"http://localhost:{port}"
            print("\n" + "="*60)
            print(" 🐍 DOBRODOŠLI U 'PYTHON OD NULE'! 🚀")
            print("="*60)
            print(f" Web sajt je uspešno pokrenut na adresi:")
            print(f" 👉 {url}")
            print("\n Pritisni Ctrl + C u ovom prozoru kada želiš da zaustaviš server.")
            print("="*60 + "\n")
            
            # Automatski otvori veb pregledač
            try:
                webbrowser.open(url)
            except Exception:
                pass

            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n👋 Server je zaustavljen. Vidimo se uskoro!\n")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Došlo je do greške pri pokretanju servera: {e}")
        sys.exit(1)

if __name__ == "__main__":
    run_server()
