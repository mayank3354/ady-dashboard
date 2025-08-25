'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { config, getDeploymentUrl } from '@/lib/config';

interface HealthStatus {
  status: string;
  timestamp: string;
  version: string;
  environment: string;
  uptime: number;
  memory: {
    rss: number;
    heapTotal: number;
    heapUsed: number;
  };
  features: {
    voiceIntegration: boolean;
    analytics: boolean;
  };
}

export function DeploymentStatus() {
  const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('/api/health');
        if (response.ok) {
          const data = await response.json();
          setHealthStatus(data);
        } else {
          setError('Health check failed');
        }
      } catch (err) {
        setError('Unable to connect to health endpoint');
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
    // Check health every 30 seconds
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  const deploymentUrl = getDeploymentUrl();

  return (
    <div className={cn(
      "p-4 border rounded-lg bg-white shadow-sm",
      "max-w-md mx-auto"
    )}>
      <h3 className="text-lg font-semibold mb-2">Deployment Status</h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Environment:</span>
          <span className="font-medium">
            {process.env.NODE_ENV}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Version:</span>
          <span className="font-medium">{config.app.version}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">URL:</span>
          <span className="font-medium text-blue-600 truncate">
            {deploymentUrl}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Voice Integration:</span>
          <span className={cn(
            "font-medium",
            config.features.voiceIntegration ? "text-green-600" : "text-red-600"
          )}>
            {config.features.voiceIntegration ? "Enabled" : "Disabled"}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <h4 className="text-sm font-semibold mb-2">Health Check</h4>
        
        {loading && (
          <div className="text-sm text-gray-500">Checking health...</div>
        )}
        
        {error && (
          <div className="text-sm text-red-600">{error}</div>
        )}
        
        {healthStatus && (
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className={cn(
                "font-medium",
                healthStatus.status === 'healthy' ? "text-green-600" : "text-red-600"
              )}>
                {healthStatus.status}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Uptime:</span>
              <span className="font-medium">
                {Math.floor(healthStatus.uptime / 60)}m {Math.floor(healthStatus.uptime % 60)}s
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Memory:</span>
              <span className="font-medium">
                {Math.round(healthStatus.memory.heapUsed / 1024 / 1024)}MB
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
