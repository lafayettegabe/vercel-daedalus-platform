'use client'
import { auth } from "@/modules/Firebase";
import FirebaseAuth from "@/modules/shared/FirebaseAuth" // button to login with google
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import React from 'react';
import { Col, Divider, Row } from 'antd';
import Logo from "@/modules/shared/components/Logo";

export default function Login() {
  const [user] = useAuthState(auth);
  const Router = useRouter();

  // Redirect to home if user is authenticated
  useEffect(() => {
    if (user) {
      Router.push('/');
    }
  }, [user, Router]);

  return (
      <div
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom right, #00008B 0%, #00AAFF 50%, #00BBFF 50%, #FAFAFF 50%, #BBBBDF 100%)",
      }}
      >
        <Row>
          <Col flex={3}>
            <div 
              style={{
                height: "100vh",
                display: "inline",
                marginTop: "10%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginLeft: "3%",
                }}
              >
                <Logo collapsed={false} />
              </div>
              <div 
                style={{ 
                  fontSize: "4rem", 
                  color: "white", 
                  fontWeight: "bold",
                  marginTop: "5%",
                  marginLeft: "-5%",
                  }}
                >
                Daedalus Institute
              </div>
            </div>
          </Col>
          <Col flex={2}>
            <div 
                style={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  background: 'white',
                  boxShadow: '-1px 5px 5px 5px rgba(0, 0, 0, 0.5)',
                  borderRadius: '20px',
                  marginRight: "5%",
                  marginTop: "5%",
                }}
            >
              {!user && (
                <div
                  className="flex flex-col items-center"
                  style={{ textAlign: "center" }}
                >
                  <h1 className="text-4xl font-bold text-white">
                    Login to acess
                  </h1>
                  <FirebaseAuth />
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
  );
}