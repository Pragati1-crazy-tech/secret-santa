"use client";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="screen">
      <div className="card single">

        {/* SANTA — before click */}
        {!open && (
          <div className="left only" onClick={() => setOpen(true)}>
            <p className="tap-text">Click to Open 🎁</p>

            <div className="scene">
              <div className="snowground"></div>
              <div className="tree t1"></div>
              <div className="tree t2"></div>

              <div className="chimney">
                <div className="snowcap"></div>
                <div className="santa">
                  <div className="belt"></div>
                  <div className="leg left-leg"></div>
                  <div className="leg right-leg"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MESSAGE — after click */}
        {open && (
          <div className="right only show">
            <h2>From Your Secret Santa</h2>

            <p><b>Dear, Anmol Sir </b></p>

            <p>
             I really appreciate your helping nature. You are always supportive and kind.
              I have learned a lot from you. You motivate me and make the workplace feel positive.
            </p>

            <p>
              Thank you for being such a supportive and approachable person.
              Wishing you a wonderful festive season filled with happiness,
              peace, laughter and success.
            </p>

            <p className="ps">
              P.S. UI still not look nice… I tried again 😄  
              Hope this one finally made you smile 😁
            </p>

            <div className="sign">— Your Secret Santa 🎄</div>
            <div className="date">25 December • Merry Christmas</div>
          </div>
        )}

      </div>
    </div>
  );
}
